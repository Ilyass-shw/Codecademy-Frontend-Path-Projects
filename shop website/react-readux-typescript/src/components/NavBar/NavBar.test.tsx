import { render, screen } from '@testing-library/react'
import NavBar from './NavBar'



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
    
})
