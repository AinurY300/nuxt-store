export function createTree<T extends object>(arg: {
  array: T[],
  idKey: keyof T,
  parentKey: keyof T,
  sortKey?: keyof T,
}) {
  const { array, idKey, parentKey, sortKey } = arg

  // Определяем тип узла дерева
  type TreeNode = T & { children: TreeNode[] }

  // Создаем пустое дерево из объекта
  const tree: { [key: string]: TreeNode } = {}
  array.forEach((n) => {
    const node = { ...n, children: [] } as TreeNode
    tree[node[idKey] as string] = node;
  })

  // Добавляем каждый узел в дерево как дочерний узел
  for (const node of Object.values(tree)) {
    const parentId = node[parentKey] as string
    if (parentId && tree[parentId]) {
      tree[parentId].children.push(node)
    }
  }

  // Находим корневые узлы дерева
  const rootNodes = Object.values(tree).filter(node => !node[parentKey]) as TreeNode[]

  // Если задан параметр sortKey, сортируем узлы и дочерние узлы по этому свойству
  if (sortKey) {
    // Сортируем дочерние узлы каждого узла
    for (const node of Object.values(tree)) {
      node.children.sort((a, b) => (a[sortKey] as any) - (b[sortKey] as any))
    }

    // Сортируем корневые узлы
    rootNodes.sort((a, b) => (a[sortKey] as any) - (b[sortKey] as any))
  }

  // Возвращаем корневые узлы дерева
  return rootNodes
}






// export function createTree<T extends object>(arg: {
//   array: T[],
//   idKey: keyof T,
//   parentKey: keyof T,
// }) {
//   const { array, idKey, parentKey } = arg;

//   // Добавляем типизацию для TreeNode и указываем, что в нём будет поле children
//   type TreeNode = T & { children: TreeNode[] };

//   // Создаём объект tree с помощью метода reduce, чтобы не мутировать исходный массив
//   const tree = array.reduce((acc: { [key: string]: TreeNode }, n: T) => {
//     acc[n[idKey] as string] = { ...n, children: [] }; // приводим id к типу string
//     return acc;
//   }, {});

//   // Обходим все узлы и добавляем их в соответствующие родительские узлы в объекте tree
//   for (const node of Object.values(tree)) {
//     const parentId = node[parentKey] as string; // приводим parentId к типу string
//     if (parentId && tree[parentId]) {
//       tree[parentId].children.push(node);
//     }
//   }

//   // Возвращаем корневые узлы дерева
//   return Object.values(tree).filter(node => !node[parentKey]);
// }