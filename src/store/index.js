import React from 'react'
import { City } from './city';

const providers = [<City.Provider />]

const Store = ({ children: initial }) =>
  providers.reduce(
    (children, parent) => React.cloneElement(parent, { children }),
    initial
  )

export { Store, City }