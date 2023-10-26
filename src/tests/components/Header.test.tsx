import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Header from '../../components/Header';

describe('<Header />', () => {
  it('should render a title', () => {
    const { getByText } = render(<Header title="Testing React" />);

    expect(getByText('Testing React')).toBeDefined();
  });

  describe('<Navbar />', () => {
    it('should render Navbar component', () => {
      const nav = screen.getByRole('navigation');
      expect(nav).toBeDefined();

      expect(nav.hasAttribute('class')).toBeTruthy();
      expect(nav.getAttribute('class')).toBe('pr-8');

      const ul = screen.getByRole('list');
      expect(ul).toBeDefined();
      expect(ul.getAttribute('class')).toBeDefined();
      expect(ul.getAttribute('class')).toBe('flex gap-12 font-semibold');

      const li = ul.querySelectorAll('li');
      expect(li.length).toEqual(3);

      const home = screen.getByText(/^home$/i);
      const about = screen.getByText(/^about$/i);
      const contact = screen.getByText(/^contact$/i);

      expect(home).toBeDefined();
      expect(about).toBeDefined();
      expect(contact).toBeDefined();

      expect(home).toBeTruthy();
      expect(about.textContent).toBe('About');
      expect(contact.textContent).toEqual('Contact');
    });
  });
});
