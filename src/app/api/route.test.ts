/**
 * @jest-environment node
 */

import { GET, POST } from "@/src/app/api/route";

describe("api", () => {
  describe("GET", () => {
    it("retrieves", async () => {
      const response = await GET({ method: "GET" } as Request);

      expect(response.ok).toBeTruthy();
      expect(await response.json()).toEqual("Hello World");
    });
  });

  describe("POST", () => {
    it("posts", async () => {
      const response = await POST({ method: "POST" } as Request);

      expect(response.ok).toBeTruthy();
      expect(await response.json()).toEqual("Hello World - POST");
    });
  });
});
