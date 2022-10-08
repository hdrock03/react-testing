import { render,screen } from "@testing-library/react"
import Async from "./Async"

describe('Async Component', () => {
    test('renders post if request succeeds',async () => {
        render(<Async />)

        // const listItemElements= screen.getAllByRole('listitem') // yeh error fek dega qki phli baar fetch krega api to kuch nh aayega qki promise return krta h fetch
        // to uske liye findallbyrole use krenge jo promise return krta h yeh tbtk test krta h jbtk success nh kr jaye yeh 1 sec tk test krta h tb tk test success ho gya to yeh pass kr deta h test
        const listItemElements= await screen.findAllByRole('listitem') // fetch ke baad list aa rha isilye usko role se khoj hai
        expect(listItemElements).not.toHaveLength(0) // listItem ka length 0 nh rhna chahiye
    })
})