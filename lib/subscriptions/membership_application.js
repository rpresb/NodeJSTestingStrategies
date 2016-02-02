var _ = require('underscore')._;

var MembershipApplication = function (args) {
    _.extend(this, args);

    this.emailIsValid = function () {
        return this.email && this.email.length > 3 && this.email.indexOf('@') > -1;
    };

    this.heightIsValid = function () {
        return this.height && this.height > 60 && this.height < 75;
    };

    this.ageIsValid = function () {
        return this.age && this.age > 15 && this.age < 100;
    };

    this.weightIsValid = function () {
        return this.weight && this.weight > 100 && this.age < 300;
    };

    this.nameIsValid = function () {
        return this.first && this.last;
    };

    this.isValid = function () {
        return this.emailIsValid() &&
            this.heightIsValid() &&
            this.ageIsValid() &&
            this.weightIsValid() &&
            this.nameIsValid();
    };
};

module.exports = MembershipApplication;