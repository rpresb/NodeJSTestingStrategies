var assert = require('assert');
var MembershipApplication = require('../membership_application');

describe('Membership application requirements', function () {
    var validApp;

    before(function () {
        validApp = new MembershipApplication({
            first: "Test",
            last: "User",
            email: "test@test.com",
            age: 30,
            height: 66,
            weight: 180
        });
    });

    describe('Validations successful if...', function () {
        it("all validators successful", function () {
            assert(validApp.isValid(), "Not valid");
        });
    });

    describe('Application invalid if...', function () {
        it('email is 4 characters or less', function () {
            var app = new MembershipApplication({ email: 'd@d' });
            assert(!app.emailIsValid());
        });
        it('email does not contain an @', function () {
            var app = new MembershipApplication({ email: 'thingthingthing:thing.com' });
            assert(!app.emailIsValid());
        });
        it('height is less than 60 inches', function () {
            var app = new MembershipApplication({ height: 59 });
            assert(!app.heightIsValid());
        });
        it('height is higher than 75 inches', function () {
            var app = new MembershipApplication({ height: 76 });
            assert(!app.heightIsValid());
        });
        it('age is less than 15', function () {
            var app = new MembershipApplication({ age: 14 });
            assert(!app.ageIsValid());
        });
        it('age is higher than 100', function () {
            var app = new MembershipApplication({ age: 101 });
            assert(!app.ageIsValid());
        });
        it('weight is less than 100', function () {
            var app = new MembershipApplication({ weight: 100 });
            assert(!app.weightIsValid());
        });
        it('weight is higher than 300', function () {
            var app = new MembershipApplication({ weight: 301 });
            assert(!app.weightIsValid());
        });
        it('first name was not provided', function () {
            var app = new MembershipApplication({ last: 'test' });
            assert(!app.nameIsValid());
        });
        it('last name was not provided', function () {
            var app = new MembershipApplication({ first: 'test' });
            assert(!app.nameIsValid());
        });
    });
});