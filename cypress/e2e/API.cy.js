///<reference types="cypress"/>

describe("Api Testing", () => {
  var userID = "";
  it("Creation of user account", () => {
    cy.request({
      method: "POST",
      url: "https://demoqa.com/Account/v1/User",
      body: {
        userName: "go",
        password: "Go@12345",
      },
    }).then((res) => {
      expect(res.status).to.equal(201);
      expect(res.body.username).to.equal("go");
      userID = res.body.userID;
    });
  });

  it("Add a list of books", () => {
    cy.request({
      method: "POST",
      url: "https://demoqa.com/BookStore/v1/Books",
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImdvIiwicGFzc3dvcmQiOiJHb0AxMjM0NSIsImlhdCI6MTcwNTc2Mjg1OX0.Wz0HfZoNC-yC65w1nQJYeEVkozv-mNeaG-xp2two8L8`,
      },
      body: {
        userId: "98c12f7a-290b-4ba3-90ab-80638a20ca9e",
        collectionOfIsbns: [
          {
            isbn: "9781491904244",
          },
        ],
      },
    }).then((res) => {
      expect(res.status).to.equal(201);
    });
  });

  it.only("Remove one of the added books", () => {
    cy.request({
      match: "DELETE",
      url: "https://demoqa.com/BookStore/v1/Book",
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImdvIiwicGFzc3dvcmQiOiJHb0AxMjM0NSIsImlhdCI6MTcwNTc2Mjg1OX0.Wz0HfZoNC-yC65w1nQJYeEVkozv-mNeaG-xp2two8L8`,
      },
      body: {
        isbn: "9781491904244",
        userId: "98c12f7a-290b-4ba3-90ab-80638a20ca9e",
      },
    }).then((res) => {
      expect(res.status).to.equal(200);
    });
  });
});
