import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import GiftForm from './GiftForm';

const mockAxios = new MockAdapter(axios);

describe('GiftForm Component', () => {
  afterEach(() => {
    mockAxios.reset();
  });

  it('renders GiftForm component with initial state', () => {
    render(<GiftForm />);

    // Check if required elements are present
    expect(screen.getByText('Gift Recommendation App')).toBeInTheDocument();
    expect(screen.getByLabelText(/Age/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Gender/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Interests/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Generate/i })).toBeInTheDocument();

    // Check initial state values
    expect(screen.getByLabelText(/Age/i)).toHaveValue('0');
    expect(screen.getByLabelText(/Gender/i)).toHaveValue('');
    expect(screen.getByLabelText(/Interests/i)).toHaveValue('');
  });

  it('displays validation error for age when submitted with age <= 0', async () => {
    render(<GiftForm />);

    fireEvent.change(screen.getByLabelText(/Age/i), { target: { value: '-5' } });
    fireEvent.click(screen.getByRole('button', { name: /Generate/i }));

    await waitFor(() => {
      expect(screen.getByText('Age must be positive')).toBeInTheDocument();
    });
  });

  it('displays validation error for gender when submitted without selecting', async () => {
    render(<GiftForm />);

    fireEvent.change(screen.getByLabelText(/Age/i), { target: { value: '25' } });
    fireEvent.click(screen.getByRole('button', { name: /Generate/i }));

    await waitFor(() => {
      expect(screen.getByText('Please select a gender')).toBeInTheDocument();
    });
  });

  it('displays validation error for interests when submitted without selecting', async () => {
    render(<GiftForm />);

    fireEvent.change(screen.getByLabelText(/Age/i), { target: { value: '25' } });
    fireEvent.change(screen.getByLabelText(/Gender/i), { target: { value: 'male' } });
    fireEvent.click(screen.getByRole('button', { name: /Generate/i }));

    await waitFor(() => {
      expect(screen.getByText('Please select interests')).toBeInTheDocument();
    });
  });

  it('updates state on input change', () => {
    render(<GiftForm />);

    fireEvent.change(screen.getByLabelText(/Age/i), { target: { value: '25' } });
    fireEvent.change(screen.getByLabelText(/Gender/i), { target: { value: 'male' } });
    fireEvent.change(screen.getByLabelText(/Interests/i), { target: { value: 'games' } });

    expect(screen.getByLabelText(/Age/i)).toHaveValue('25');
    expect(screen.getByLabelText(/Gender/i)).toHaveValue('male');
    expect(screen.getByLabelText(/Interests/i)).toHaveValue('games');
  });

  it('handles form submission and displays gift recommendations', async () => {
    const responseData = {
      choices: [{ message: { content: 'Gift 1\nGift 2\nGift 3' } }],
    };
    mockAxios.onPost('https://api.openai.com/v1/chat/completions').reply(200, responseData);

    render(<GiftForm />);

    fireEvent.change(screen.getByLabelText(/Age/i), { target: { value: '25' } });
    fireEvent.change(screen.getByLabelText(/Gender/i), { target: { value: 'male' } });
    fireEvent.change(screen.getByLabelText(/Interests/i), { target: { value: 'games' } });

    fireEvent.click(screen.getByText(/Generate/i));

    await waitFor(() => {
      expect(screen.getByText('Gift recommendations:')).toBeInTheDocument();
      expect(screen.getAllByTestId('gift-details')).toHaveLength(3);
    });
  });

  it('displays an error message on API failure', async () => {
    mockAxios.onPost('https://api.openai.com/v1/chat/completions').reply(500);

    render(<GiftForm />);

    fireEvent.change(screen.getByLabelText(/Age/i), { target: { value: '25' } });
    fireEvent.change(screen.getByLabelText(/Gender/i), { target: { value: 'male' } });
    fireEvent.change(screen.getByLabelText(/Interests/i), { target: { value: 'games' } });

    fireEvent.click(screen.getByText(/Generate/i));

    await waitFor(() => {
      expect(screen.getByText(/Something is going wrong, Please try again./i)).toBeInTheDocument();
    });
  });
});
