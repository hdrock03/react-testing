import { render, screen } from "@testing-library/react"
import Greeting from './Greeting'
import userEvent from '@testing-library/user-event' // userEvent is an object that helps to trigger user event in virtual screen

describe('greeting component', () => { // describe 2 components leta h 1st us group ka naam/description and second me code
    test('renders Hello World as a text', () => { // test me phla argument us test ka description hota h
        //Arrange
        render(<Greeting />) // here we are rendering Greeting component
    
        // Act
    
        //Assert
        const helloWorldElement = screen.getByText('Hello World!',{exact:true}) // screen is just like virtual screen for virtual DOM
        expect(helloWorldElement).toBeInTheDocument() // expect me pass krenge variable ko aur fir method h ki wo present h ki nh
    })
    //exact:false lagane ke baad aur exclamation hata de hello world ke baad tabhi pass ho jayega testing qki exact false h
    // agr exact true kr dete aur ! nh hota to test fail ho jata

test('renders good to see you if th button was Not clicked', () => {
    render(<Greeting />)

    const paraElement = screen.getByText("It's good to see you",{exact:false})
    expect(paraElement).toBeInTheDocument()
})

test('renders "Changed" if the button was clicked', () => {
    // ARRANGE
    render(<Greeting />)

    //ACT
    const buttonElement = screen.getByRole('button') // button element ko pakarne ke liye screen me getbyrole kiye h
    userEvent.click(buttonElement) // userEvent me click lagaye h ki jb button click hga tbv yeh test chalega

    //Assert
    const outputElement = screen.getByText('Changed')
    expect(outputElement).toBeInTheDocument()

})

test('does not render "good to see you" if button was clicked',() => {
    // ARRANGE
    render(<Greeting />)

    //ACT
    const buttonElement = screen.getByRole('button') 
    userEvent.click(buttonElement) 

    //Assert
    // const outputElement = screen.getByText('good to see you', {exact: false})// yaha yeh kaam nh krega
    const outputElement = screen.queryByText('good to see you', {exact: false})
    expect(outputElement).toBeNull()
})
})