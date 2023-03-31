import { authReducer } from "../../../src/auth/context/authReducer"
import { types } from "../../../src/auth/types/types";
describe('Prueba en AuthReducer', () => {
test('debe retornar el estado por defecto', () => { 
    const action = {
        type: "Other",
      };
    const state = authReducer({},action);
    expect(state).toEqual({});
 });
 
 test('debe de (login) llamar el login autenticar y establecer el user', () => { 
    const user = "Amador"
    const action = {
        type: types.login,
        payload: user,
      };
    const state = authReducer({},action);

    expect(state).toEqual({
        logged: true,
        user: "Amador",
    });
 });
 
 test('debe de (logout) borrar el name del usuario y logged en false', () => { 
    const state = {
      logged: true,
      user: "Amador"
    };
    
    const action = {
        type: types.logout
      };
    const newState = authReducer(state,action);

    expect(newState).toEqual({
        logged: false,
    });
 })     
});