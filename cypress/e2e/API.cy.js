///<reference types="cypress"/>

describe("Api Testing", () => {
  let requestBody;

  before(() => {
    // Load fixture data before tests
    cy.fixture("example").then((data) => {
      requestBody = data;
    });
  });

  it("Creation of user account", () => {
    cy.request({
      method: "POST",
      url: "https://demoqa.com/Account/v1/User",
      body: {
        userName: requestBody.userName,
        password: requestBody.password,
      },
    }).then((res) => {
      expect(res.status).to.equal(201);
      expect(res.body.username).to.equal("go");
    });
  });

  it.only("Add a list of books", () => {
    cy.request({
      method: "POST",
      url: "https://demoqa.com/BookStore/v1/Books",
      headers: {
        Authorization: requestBody.auth,
      },
      body: {
        userId: requestBody.userId,
        collectionOfIsbns: [
          {
            isbn: requestBody.isbn,
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
      url: "https://demoqa.com/BookStore/v1/Books",
      headers: {
        Authorization: requestBody.auth,
      },
      body: {
        isbn: requestBody.isbn,
        userId: requestBody.userId,
      },
    }).then((res) => {
      expect(res.status).to.equal(200);
    });
  });
});
