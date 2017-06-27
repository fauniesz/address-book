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
      $("#show.first-name").text(newContact.firstName);
      $("#show.last-name").text(newContact.lastName);
      $("#show.street-address").text(newContact.streetAddress);
      $("#show.city-address").text(newContact.cityAddress);
      $("#show.state-address").text(newContact.stateAddress);
      $("#show.zip-address").text(newContact.zipAddress);
      $("#show.country-address").text(newContact.countryAddress);
      $("#show.phone").text(newContact.phone);
      $("#show.email").text(newContact.email);
    });

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-street-address").val("");
    $("input#new-city-address").val("");
    $("input#new-state-address").val("");
    $("input#new-zip-address").val("");
    $("input#new-country-address").val("");
    $("input#new-phone").val("");
    $("input#new-email").val("");
  });
});
