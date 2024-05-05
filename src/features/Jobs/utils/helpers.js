export function composeJobsData(data) {
  console.log(data);
  return {
    rows: data?.pages?.reduce((acc, curr) => {
      acc.push(...curr?.data?.rows);
      return acc;
    }, []),

    total_records: data?.pages[0]?.data?.total_records,
  };
}

export function cap(text) {
  let pattern = /(?<=[.!?])\s+/;

  let sentences = text.split(pattern);

  let capitalizedSentences = sentences.map(function (sentence) {
    return sentence.charAt(0).toUpperCase() + sentence.slice(1);
  });

  return capitalizedSentences.join(" ");
}
