import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import StudyBoardView from "@/views/StudyBoardView.vue";
import MeetingView from "@/views/MeetingView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/study_board",
      name: "studyBoard",
      component: StudyBoardView,
    },
    {
      path: "/meeting/:roomId",
      name: "meeting",
      component: MeetingView,
    },
  ],
});

export default router;
