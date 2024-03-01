import { faker } from "@faker-js/faker";
import { fireEvent, render, screen } from "@testing-library/react";
import Dashboard from ".";
import { fetchPokemonList } from "../../services/PokemonService";

const mockFetchListPokemonFn = vi
  .fn(fetchPokemonList)
  .mockImplementation(async () => {
    return [
      {
        id: 1,
        name: "Pikaxu",
        image: faker.image.urlPlaceholder(),
        type: "Eletrico",
      },
      {
        id: 2,
        name: "Charmander",
        image: faker.image.urlPlaceholder(),
        type: "Fogo",
      },
    ];
  });

const navigateMock = vi.fn();

describe("Testa o component Dashboard", () => {
  vi.mock("react-router-dom", () => {
    return {
      useNavigate() {
        return navigateMock;
      },
    };
  });
  test("Deve haver um título na página", async () => {
    render(<Dashboard fetchPokemonList={mockFetchListPokemonFn} />);

    const title = await screen.findByRole("heading");

    expect(title).toHaveTextContent("Dashboard");
  });

  test("Deve haver uma lista com 2 pokemons", async () => {
    render(<Dashboard fetchPokemonList={mockFetchListPokemonFn} />);

    const items = await screen.findAllByRole("listitem");

    expect(items).toHaveLength(2);
  });

  test("Deve haver um pikaxu na lista", async () => {
    render(<Dashboard fetchPokemonList={mockFetchListPokemonFn} />);

    const pikaxu = await screen.findByText("Pikaxu");
    expect(pikaxu).toBeInTheDocument();
  });

  test("Deve ser possível clicar no li para abrir a página de detalhes do pokemon", async () => {
    render(<Dashboard fetchPokemonList={mockFetchListPokemonFn} />);

    const link = await screen.findByText("Pikaxu");
    fireEvent.click(link);

    expect(navigateMock).toHaveBeenCalledTimes(1);
  });
});
