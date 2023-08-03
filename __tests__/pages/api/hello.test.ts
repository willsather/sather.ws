import { NextApiRequest } from "next/dist/shared/lib/utils";
import { NextApiResponse } from "next";
import helloApi from "@/pages/api/index";

describe("hello api", () => {
  const json = jest.fn();
  const status = jest.fn(() => {
    return {
      json,
    };
  });

  const response = {
    status,
  } as unknown as NextApiResponse;

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("GET", () => {
    it("retrieves", async () => {
      await helloApi(
        {
          method: "GET",
        } as NextApiRequest,
        response
      );
      expect(status).toHaveBeenCalledWith(200);
    });
  });
});
