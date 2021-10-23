module.exports = (routes) =>
  routes.reduce(
    (prev, item) => {
      const isSubPackages = item.routes && item.routes.length;
      if (!isSubPackages) {
        prev.pages.push(item.path);
        prev.titleMap[`/${item.path}`] = item.title;
        return prev;
      }
      const sub = item.routes?.reduce(
        (p, t) => {
          p.pages.push(t.path);
          p.titleMap[`/${item.path}/${t.path}`] = item.title ?? t.title;
          return p;
        },
        {pages: [], titleMap: {}}
      );
      prev.subPackages.push({
        root: item.path,
        pages: sub.pages,
      });
      prev.titleMap = {
        ...prev.titleMap,
        ...sub.titleMap,
      };
      return prev;
    },
    {pages: [], subPackages: [], titleMap: {}}
  );
