//business logic
function Contact(first, last, street, city, state, zip, country, phone, email) {
  this.firstName = first;
  this.lastName = last;
  this.streetAddress = street;
  this.cityAddress = city;
  this.stateAddress = state;
  this.zipAddress = zip;
  this.countryAddress = country;
  this.phone = phone;
  this.email = email;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

// user interface logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();

    var inputtedLastName = $("input#new-last-name").val();

    var inputtedStreetAddress = $("input#new-street-address").val();

    var inputtedCityAddress = $("input#new-city-address").val();

    var inputtedStateAddress = $("input#new-state-address").val();

    var inputtedZipAddress = $("input#new-zip-address").val();

    var inputtedCountryAddress = $("input#new-country-address").val();

    var inputtedPhone = $("input#new-phone").val();

    var inputtedEmail = $("input#new-email").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedStreetAddress, inputtedCityAddress, inputtedStateAddress, inputtedZipAddress, inputtedCountryAddress, inputtedPhone, inputtedEmail);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $("#show-contact .first-name").text(newContact.firstName);
      $("#show-contact .last-name").text(newContact.lastName);
      $("#show-contact .street-address").text(newContact.streetAddress);
      $("#show-contact .city-address").text(newContact.cityAddress);
      $("#show-contact .state-address").text(newContact.stateAddress);
      $("#show-contact .zip-address").text(newContact.zipAddress);
      $("#show-contact .country-address").text(newContact.countryAddress);
      $("#show-contact .phone").text(newContact.phone);
      $("#show-contact .email").text(newContact.email);
    });

    // $("input#new-first-name").val("");
    // $("input#new-last-name").val("");
    // $("input#new-street-address").val("");
    // $("input#new-city-address").val("");
    // $("input#new-state-address").val("");
    // $("input#new-zip-address").val("");
    // $("input#new-country-address").val("");
    // $("input#new-phone").val("");
    // $("input#new-email").val("");
  });
});
