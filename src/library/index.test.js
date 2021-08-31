import { render, screen } from '@testing-library/react';
import { Button } from './index'

describe('render libary components', () => {
    test('renders button component', () => {
        render(<Button>Button 1</Button>);
        const buttonElement = screen.getByText(/Button 1/i);
        expect(buttonElement).toBeInTheDocument();
    });
})
