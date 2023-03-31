import { AuthContext } from "../../../src/auth";
import { render, screen } from "@testing-library/react";
import { PrivateRoutes } from "../../../src/heroes/routes/PrivateRoutes";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("Pruebas en <PrivateRoutes/>", () => {
  test("Si esta autenticado se muestra la (children)", () => {
    
    //Observar localstorage de lo que se esta almacenando:

    Storage.prototype.setItem = jest.fn();
    
    const contextValue = {
      logged: true,
      user: {
        id: "ABC",
        name: "Karla",
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/search?q=batman']}>
          <PrivateRoutes>
            <h1>Ruta Privada</h1>
          </PrivateRoutes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Ruta Privada")).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/search?q=batman");
  });

});
