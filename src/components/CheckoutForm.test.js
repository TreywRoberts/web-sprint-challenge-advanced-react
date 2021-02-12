import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
    const header = screen.getByText(/Checkout Form/i);
    expect(header).toBeInTheDocument()
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);
    const firstName = screen.getByLabelText(/first name:/i);
    const lastName = screen.getByLabelText(/last name:/i);
    const address = screen.getByLabelText(/Address:/i);
    const city = screen.getByLabelText(/city:/i);
    const state = screen.getByLabelText(/state:/i);
    const zip = screen.getByLabelText(/zip:/i);

    userEvent.type(firstName,'Trey');
    userEvent.type(lastName,'Roberts');
    userEvent.type(address,'100 drive dr');
    userEvent.type(city,'Athens');
    userEvent.type(state, 'GA');
    userEvent.type(zip,'10101')
    
    const button = screen.getByRole('button', {name:/checkout/i});
    userEvent.click(button);


    const checkout = screen.getByTestId('successMessage');
    const newFirstName = screen.getByText(/Trey/i);
    const newLastName = screen.getByText(/roberts/i);
    const newAddress = screen.getByText(/100 drive dr/i);
    const newCity = screen.getByText(/Athens/i);
    const newState = screen.getByText(/ga/i);
    const newZip = screen.getByText(/10101/i);

    
    
    
    expect(checkout).toBeInTheDocument();
    expect(newFirstName).toBeInTheDocument();
    expect(newLastName).toBeInTheDocument();
    expect(newAddress).toBeInTheDocument();
    expect(newCity).toBeInTheDocument();
    expect(newState).toBeInTheDocument();
    expect(newZip).toBeInTheDocument();

});












