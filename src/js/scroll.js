export default function scrolling() {
  const sections = document.querySelectorAll('section');

  const action = (current) => {
    console.log(current);
  };

  const sectionWatcherCallback = (section, sectionWatcher) => {
    section.forEach((section) => {
      if (!section.isIntersecting) {
        return;
      }
      action(section.target.id);
    });
  };

  const sectionWatcherOption = () => {
    threshold: 0.6;
  };

  const sectionWatcher = new IntersectionObserver(sectionWatcherCallback, sectionWatcherOption);

  sections.forEach((section) => {
    sectionWatcher.observe(section);
  });
}
