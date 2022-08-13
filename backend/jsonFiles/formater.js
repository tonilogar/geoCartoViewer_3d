const createGroupDataBy =
  (groupKey = "projectType") =>
    (data = []) => {
      const groupedData = {};
      data.forEach((item) => {
        const key = item?.[groupKey];
        if (!key) return;
        groupedData[key] = [...(groupedData[key] ?? []), item];
      });
      return groupedData;
    };

const groupByProjectType = createGroupDataBy("projectType");
const groupByTitleProject = createGroupDataBy("titleProject");

const formatObject = ({
  data = {},
  titleName = "title",
  groupName = "subtitles",
  valueFormater = (val) => val,
}) => {
  const formatedObj = {};
  Object.entries(data).forEach(([key, value]) => {
    formatedObj[key] = {
      [titleName]: key,
      [groupName]: valueFormater(value),
    };
  });
  return formatedObj;
};

const formatGroup = (group = {}, asArray = true) =>
  asArray ? Object.values(group) : group;

export const formatData = (data = [], groupAsArray = true) => {
  const dataByProjectType = groupByProjectType(data);
  const formatedULs = formatObject({
    data: dataByProjectType,
    titleName: "title",
    groupName: "subtitles",
  });

  Object.keys(formatedULs).forEach((key) => {
    const formatedLIs = formatObject({
      data: groupByTitleProject(formatedULs[key].subtitles),
      titleName: "title01",
      groupName: "projects",
      valueFormater: (data = []) => {
        return data?.map((item) => ({
          id: item._id,
          titleProject: item.subTitleProject,
          dbData: item,
        }));
      },
    });
    formatedULs[key].subtitles = formatGroup(formatedLIs, groupAsArray);
  });

  return formatGroup(formatedULs, groupAsArray);
};