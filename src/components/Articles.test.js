import { render, screen, waitFor } from '@testing-library/react';
import Articles from './Articles';

test("check if card classes exists on API response", async () => {
    render(<Articles />);
    await waitFor(() => {
        const card =  document.querySelector(".card");
        expect(card).toBeInTheDocument();
        expect(card).toBeVisible();
    })
   
});