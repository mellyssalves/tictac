import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('checkWinner function correctly determines the winner', () => {
    render(<App />);
    const cells = screen.getAllByTestId('cell');
  
    // Simulate a winning scenario for player X
    fireEvent.click(cells[0]); // X
    fireEvent.click(cells[3]); // O
    fireEvent.click(cells[1]); // X
    fireEvent.click(cells[4]); // O
    fireEvent.click(cells[2]); // X
  
    expect(screen.getByText('O jogador X venceu!')).toBeInTheDocument();
  });
  