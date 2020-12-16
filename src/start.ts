import { Atom } from "./domain/entities/atom"

const maybeCabon = Atom.create('')

if (maybeCabon.isFailure) {
  console.log('Erro: ', maybeCabon.error.message)
} else {
  console.log('Carbono: ', maybeCabon.value.symbol)
}