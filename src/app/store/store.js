import { create } from "zustand";
import { fetchReadme } from "@varandas/fetch-readme";
import "text-encoding";

import axios from "axios";

const useStore = create((set) => ({

  repos: null
  ,
  data: null,

  loading: false,

  error: null,

  init: {
    thumbnailUrl: "",
    title: "",
    description: null,
    subBranch: null,
    version: "1.00",
    liveLink: "",
    category: null,
    tags: "",
    isPublised: "true",
  },



  fetchRepo: async () => {
    set({ loading: true, error: null });

    try {
      const response = await axios.get(`${process.env.NEXT_URL}/repo`);

      set({ repos: response.data, loading: false });
    } catch (error) {
      set({ error, loading: false });
    }
  },

  fetchCategory: async () => {
    set({ loading: true, error: null });

    try {
      const response = await fetch(
        `${process.env.NEXT_URL}/category`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
        { cache: "no-store" }
      );
      const { data } = await response.json();

      set((state) => ({
        init: {
          ...state.init,
          category: data,
        },
        loading: false,
      }));
    } catch (error) {
      set({ error, loading: false });
    }
  },

  fetchData: async () => {
    set({ loading: true, error: null });

    try {
      const response = await fetch(
        process.env.GET_ALL_REPO,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${process.env.SECRET_TOKEN} `,
            "Content-Type": "application/json",
          },
        },
        { cache: "no-store" }
      );
      const data = await response.json();

      set({ data, loading: false });
    } catch (error) {
      set({ error, loading: false });
    }
  },

  fetchReadmd: async (repo) => {
    set({ loading: true, error: null });

    try {
      const readme = await fetchReadme({
        username: "abuanwar072",
        repository: repo,
      });

      set((state) => ({
        init: {
          ...state.init,
          description: readme,
        },
        loading: false,
      }));
    } catch (error) {
      set({ error, loading: false });
    }
  },

  fetchBranches: async (repo) => {
    set({ loading: true, error: null });

    try {
      const response = await fetch(
        `https://api.github.com/repos/abuanwar072/${repo}/branches`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${process.env.SECRET_TOKEN} `,
            "Content-Type": "application/json",
          },
        },
        { revalidate: 3600 }
      );

      const data = await response.json();

      set((state) => ({
        loading: false,
        init: {
          ...state.init,
          subBranch: data,
        },
      }));
    } catch (error) {
      set({ error, loading: false });
    }
  },

  refetchData: () => {
    // Call the fetchData method to trigger a refetch
    useStore.getState().fetchData();
  },
}));

export default useStore;

