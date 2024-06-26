/**
 * Test suite for email verification
 */
import { ObjectId } from "bson";
import { Express } from "express";
import { Status } from "src/_enums/Status";
import User from "src/models/User";
import request from "supertest";

import { getApp, setup, shutdown } from "../../index";

let app: Express = null;

beforeAll(async () => {
  await setup();
  app = getApp();
});

afterAll(async () => {
  await shutdown();
});

describe("verify", () => {
  // Standard verification should create a Status object, verifying the user
  it("should update a user's status", async () => {
    const registerResponse = await request(app).post("/auth/register").send({
      email: "dummy@scottylabs.org",
      password: "abc123",
    });
    const { _id } = registerResponse.body;
    const user = await User.findById(_id);
    const token = user.generateEmailVerificationToken();
    const verifyResponse = await request(app)
      .get(`/auth/verify/${token}`)
      .send();
    expect(verifyResponse.status).toEqual(200);

    const updatedUser = await User.findById(_id);
    expect(updatedUser).not.toBeNull();
    expect(updatedUser.status).toBe(Status.VERIFIED);
  });

  // Verification should not occur for invalid tokens
  it("should error 400 for bad token", async () => {
    const registerResponse = await request(app).post("/auth/register").send({
      email: "dummy1@scottylabs.org",
      password: "abc123",
    });
    const { _id } = registerResponse.body;
    const verifyResponse = await request(app).get(`/auth/verify/abc`).send();
    expect(verifyResponse.status).toEqual(400);

    const user = await User.findById(_id);
    expect(user).not.toBeNull();
    expect(user.status).toBe(Status.UNVERIFIED);
  });
});
