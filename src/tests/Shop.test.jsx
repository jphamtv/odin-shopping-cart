import { render, screen, waitFor } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom/matchers";
import Shop from "../components/pages/Shop";
import fetchProducts from "../utils/fetchProducts";
import { describe, expect, it, vi } from "vitest";
import { CartContext } from "../context/CartContext";

expect.extend({ toBeInTheDocument });

vi.mock("../utils/fetchProducts");

describe("Shop", () => {
  it("renders the loading state while fetching products", () => {
    vi.mocked(fetchProducts).mockResolvedValueOnce([]);
    const addToCart = vi.fn();
    render(
      <CartContext.Provider value={{ addToCart }}>
        <Shop />
      </CartContext.Provider>,
    );
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders the error state if there's an error fetching products", async () => {
    vi.mocked(fetchProducts).mockRejectedValueOnce(
      new Error("Error fetching products"),
    );
    const addToCart = vi.fn();
    render(
      <CartContext.Provider value={{ addToCart }}>
        <Shop />
      </CartContext.Provider>,
    );
    await waitFor(() => {
      expect(
        screen.getByText("Oops...error fetching products"),
      ).toBeInTheDocument();
    });
  });
});
