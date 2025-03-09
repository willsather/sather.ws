import { expect, test } from "@playwright/test";

test.describe("Navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should navigate to work page", async ({ page }) => {
    await page.getByRole("link", { name: "work" }).click();

    await expect(page).toHaveTitle(/Work/);
    await expect(page.getByRole("heading", { name: "Work" })).toBeVisible();
  });

  test("should navigate to home page", async ({ page }) => {
    await page.getByRole("link", { name: "home" }).click();

    await expect(page).toHaveTitle(/Will Sather/);
    await expect(
      page.getByRole("heading", { name: "WILL SATHER" }),
    ).toBeVisible();
  });

  test("should navigate to blog page", async ({ page }) => {
    await page.getByRole("link", { name: "blog" }).click();

    await expect(page).toHaveTitle(/Blog/);
    await expect(page.getByRole("heading", { name: "BLOG" })).toBeVisible();
  });

  test("should navigate to about page", async ({ page }) => {
    await page.getByRole("link", { name: "about" }).click();

    await expect(page).toHaveTitle(/About/);
    await expect(page.getByRole("heading", { name: "ABOUT" })).toBeVisible();
  });
});
