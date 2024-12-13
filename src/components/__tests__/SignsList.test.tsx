import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SignsList from '@/components/ui/SignsList';
import { mockSigns } from '@/utils/tests';

describe('SignsList Component', () => {
  it('renders a list of zodiac signs', () => {

    render(<SignsList signs={mockSigns} />);

    // Check that the correct number of signs is rendered
    const signElements = screen.getAllByRole('img');
    expect(signElements).toHaveLength(mockSigns.length);

    // Check that specific sign names are displayed
    mockSigns.forEach((sign) => {
      expect(screen.getByText(sign.name)).toBeTruthy();
    });
  });

  it('displays a message when there are no signs', () => {
    render(<SignsList signs={[]} />);

    expect(screen.getByTestId('not-found-screen')).toBeTruthy();
  });
});
