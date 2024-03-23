/**
 * @jest-environment node
 */

import { GET, POST } from "@/src/app/api/route";

describe("api", () => {
  describe("GET", () => {
    it("retrieves", async () => {
      const response = await GET();

      expect(response.ok).toBeTruthy();
      expect(await response.json()).toEqual("Hello World");
    });
  });

  describe("POST", () => {
    it("posts", async () => {
      const response = await POST();

      expect(response.ok).toBeTruthy();
      expect(await response.json()).toEqual("Hello World - POST");
    });
  });
});
