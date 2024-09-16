export function calculateSimilarity(user1, user2) {
    const interests1 = new Set(user1.interests);
    const interests2 = new Set(user2.interests);
    const intersection = new Set(
      [...interests1].filter(x => interests2.has(x))
    );
    return intersection.size / Math.sqrt(interests1.size * interests2.size);
  }
  
  export function getRecommendations(currentUser, allUsers) {
    return allUsers
      .filter(user => user.id !== currentUser.id)
      .map(user => ({
        ...user,
        similarity: calculateSimilarity(currentUser, user)
      }))
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, 5);  // Return top 5 recommendations
  }