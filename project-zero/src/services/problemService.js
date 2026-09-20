const SAVED_KEY = 'pz_saved_problems';
const VOTED_KEY = 'pz_voted_problems';

export const problemService = {
  saveProblem: async (problemId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const saved = JSON.parse(localStorage.getItem(SAVED_KEY) || '[]');
        if (!saved.includes(problemId)) {
          saved.push(problemId);
          localStorage.setItem(SAVED_KEY, JSON.stringify(saved));
        }
        resolve({ success: true, saved: true });
      }, 500);
    });
  },

  unsaveProblem: async (problemId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let saved = JSON.parse(localStorage.getItem(SAVED_KEY) || '[]');
        saved = saved.filter(id => id !== problemId);
        localStorage.setItem(SAVED_KEY, JSON.stringify(saved));
        resolve({ success: true, saved: false });
      }, 500);
    });
  },

  isSaved: (problemId) => {
    const saved = JSON.parse(localStorage.getItem(SAVED_KEY) || '[]');
    return saved.includes(problemId);
  },

  upvoteProblem: async (problemId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const voted = JSON.parse(localStorage.getItem(VOTED_KEY) || '[]');
        if (voted.includes(problemId)) {
          resolve({ success: false, message: 'Already voted' });
          return;
        }
        voted.push(problemId);
        localStorage.setItem(VOTED_KEY, JSON.stringify(voted));
        resolve({ success: true });
      }, 400);
    });
  },

  hasVoted: (problemId) => {
    const voted = JSON.parse(localStorage.getItem(VOTED_KEY) || '[]');
    return voted.includes(problemId);
  }
};
