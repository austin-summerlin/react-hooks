//https://officeapi.dev/api/quotes/random

export const fetchQuotes = async () => {
  const res = await fetch('https://officeapi.dev/api/quotes/random');
  const json = await res.json();

  return json.map((quote) => ({
    content: quote.content,
    character: quote.character,
  }));
};

