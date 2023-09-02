/**
 * @jest-environment node
 */

import { GET, POST } from "@/src/app/api/route";
import { NextResponse } from "next/server";

describe("api", () => {
  const jsonSpy = jest.spyOn(NextResponse, "json");

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("GET", () => {
    it("retrieves", async () => {
      const response = await GET({ method: "GET" } as Request);
      expect(jsonSpy).toHaveBeenCalledWith("Hello World", { status: 200 });
    });
  });

  describe("POST", () => {
    it("posts", async () => {
      await POST({ method: "POST" } as Request);
      expect(jsonSpy).toHaveBeenCalledWith("Hello World - POST", { status: 201 });
    });
  });
});
