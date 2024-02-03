///<reference types="cypress"/>

describe("Api Testing", () => {
  let requestBody: any;

  before(() => {
    // Load fixture data before tests
    cy.fixture("api_data").then((data: any) => {
      requestBody = data;
    });
  });

  it("Creation of user account", () => {
    cy.request({
      method: "POST",
      url: "https://demoqa.com/Account/v1/User",
      failOnStatusCode: false,
      body: {
        userName: requestBody.userName,
        password: requestBody.password,
      },
    }).then((res) => {
      if (res.status == 201) {
        expect(res.status).to.equal(201);
        expect(res.body.username).to.equal(requestBody.userName);
      } else {
        expect(res.status).to.equal(406);
        expect(res.body.message).to.equal("User exists!");
      }
    });
  });

  it("Add a list of books", () => {
    cy.request({
      method: "POST",
      url: "https://demoqa.com/BookStore/v1/Books",
      headers: {
        Authorization: `Bearer ${requestBody.token}`,
        "Content-type": "application/json",
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

  it("Remove one of the added books", () => {
    cy.request({
      method: "DELETE",
      url: "https://demoqa.com/BookStore/v1/Book",
      headers: {
        Authorization: `Bearer ${requestBody.token}`,
        "Content-type": "application/json",
      },
      body: {
        isbn: requestBody.isbn,
        userId: requestBody.userId,
      },
    }).then((res) => {
      expect(res.status).to.equal(204);
    });
  });
});
