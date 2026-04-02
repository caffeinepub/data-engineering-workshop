import InviteLinksModule "invite-links/invite-links-module";
import AccessControl "authorization/access-control";
import MixinAuthorization "authorization/MixinAuthorization";
import Array "mo:core/Array";
import Random "mo:core/Random";
import Order "mo:core/Order";
import List "mo:core/List";
import Time "mo:core/Time";
import Int "mo:core/Int";
import Text "mo:core/Text";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  type Registration = {
    name : Text;
    email : Text;
    phone : Text;
    timestamp : Time.Time;
  };

  let registrations = Map.empty<Text, Registration>();

  module Registration {
    public func compareByTimestamp(reg1 : Registration, reg2 : Registration) : Order.Order {
      Int.compare(reg2.timestamp, reg1.timestamp);
    };
  };

  let inviteState = InviteLinksModule.initState();

  public shared ({ caller }) func register(name : Text, email : Text, phone : Text) : async () {
    if (registrations.containsKey(email)) {
      Runtime.trap("Email already exists. Please use a different email address.");
    };

    let registration : Registration = {
      name;
      email;
      phone;
      timestamp = Time.now();
    };

    registrations.add(email, registration);
  };

  public shared ({ caller }) func generateInviteCode() : async Text {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can generate invite codes");
    };
    let blob = await Random.blob();
    let code = InviteLinksModule.generateUUID(blob);
    InviteLinksModule.generateInviteCode(inviteState, code);
    code;
  };

  public shared func submitRSVP(name : Text, attending : Bool, inviteCode : Text) : async () {
    InviteLinksModule.submitRSVP(inviteState, name, attending, inviteCode);
  };

  public query ({ caller }) func getAllRSVPs() : async [InviteLinksModule.RSVP] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view RSVPs");
    };
    InviteLinksModule.getAllRSVPs(inviteState);
  };

  public query ({ caller }) func getInviteCodes() : async [InviteLinksModule.InviteCode] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view invite codes");
    };
    InviteLinksModule.getInviteCodes(inviteState);
  };

  public query ({ caller }) func getAllRegistrations() : async [Registration] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Admin privileges required to access this data");
    };
    registrations.values().toArray();
  };

  public query ({ caller }) func getRegistrationsByNewest() : async [Registration] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Admin privileges required to access this data");
    };
    let registrationsList = List.empty<Registration>();
    for ((key, value) in registrations.entries()) {
      registrationsList.add(value);
    };
    let registrationsArray = registrationsList.toArray();
    registrationsArray.sort(Registration.compareByTimestamp);
  };

  public query func getRegistrationCount() : async Nat {
    registrations.size();
  };
};
