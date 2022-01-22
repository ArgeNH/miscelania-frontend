import { types } from "../types/types";

export const startLoginWithEmailAndPassword = (email, password) => {
   return async (dispatch) => {
      await fetch('https://miscelanea-api.herokuapp.com/api/user/signIn', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            email,
            password
         })
      })
         .then(response => response.json())
         .then(data => {
            const { user } = data;
            dispatch(login(user._id, user.name, user.lastName, user.email, user.city, user.address, user.phone, user.role));
         })
         .catch(err => console.log(err));
   }
}

export const startRegister = (name, lastName, password, email, city, address, phone) => {
   return async (dispatch) => {
      await fetch('https://miscelanea-api.herokuapp.com/api/user/signUp', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            name,
            lastName,
            password,
            email,
            city,
            address,
            phone
         })
      })
         .then(response => response.json())
         .then(data => {
            const { user } = data;
            dispatch(login(user._id, user.name, user.lastName, user.email, user.city, user.address, user.phone, user.role));
         })
         .catch(err => console.log(err));
   }
}

export const login = (_id, name, lastName, email, city, address, phone, role) => ({
   type: types.login,
   payload: {
      _id,
      name,
      lastName,
      email,
      city,
      address,
      phone,
      role
   }
})

export const logout = () => ({
   type: types.logout
})