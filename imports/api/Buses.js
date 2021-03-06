import { Meteor } from "meteor/meteor";
import { HTTP } from "meteor/http";

const url = "http://webservices.nextbus.com/service/publicJSONFeed?command=vehicleLocations&a=sf-muni&t=0";

if (Meteor.isServer) {
  Meteor.methods({
    "getBusesData"() {
      //long live promises!!!!
      let response = new Promise((resolve, reject) => {
        HTTP.call("GET", url, (err, response) => {
          if (err) reject(err);
          resolve(response);
        });
      });
      return response;
    }
  });
}
