import { render, screen, fireEvent, within } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom/matchers";
import ProductCard from "../components/common/ProductCard";
import { describe, expect, it, vi } from "vitest";

expect.extend({ toBeInTheDocument });

describe("ProductCard", () => {
  it("renders the product title correctly", () => {
    const product = { id: 1, title: "Product 1", price: 12 };
    render(<ProductCard product={product} onAddToCart={() => {}} />);
    expect(screen.getByText("Product 1")).toBeInTheDocument();
  });

  it("renders the product price correctly", () => {
    const product = { id: 1, title: "Product 1", price: 10 };
    render(<ProductCard product={product} onAddToCart={() => {}} />);
    expect(screen.getByText("$10.00")).toBeInTheDocument();
  });

  it('calls onAddToCart with the correct product and quantity when "Add to Cart" button is clicked', () => {
    const product = { id: 1, title: "Product 1", price: 11 };
    const onAddToCartMock = vi.fn();
    const { container } = render(
      <ProductCard product={product} onAddToCart={onAddToCartMock} />,
    );
    const addToCartButton = within(container).getByText("Add to cart");
    fireEvent.click(addToCartButton);
    expect(onAddToCartMock).toHaveBeenCalledWith(product, 1);
  });
});
