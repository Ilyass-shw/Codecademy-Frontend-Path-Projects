import { render, screen } from '@testing-library/react'
import NavBar from './NavBar'
import userEvent from '@testing-library/user-event'



describe('NavBar', () => {
    it('should render', () => {
        render(<NavBar/>)

        const Logo = screen.getByText('Shw')
        const ShopLink = screen.getByText('Shop')
        const CollectionLink = screen.getByText('Collection')
        
        expect(Logo).toBeInTheDocument()
        expect(ShopLink).toBeInTheDocument()
        expect(CollectionLink).toBeInTheDocument()
    })
    
    it('should open cart items pop on page that are in the cart when cliled on cart icon', () => {
        render(<NavBar/>)
        const icon = screen.getByRole('button')
        userEvent.click(icon)
        const item = screen.getAllByText('Item1')
        expect(item).toBeInTheDocument()
    })
    
    
})
