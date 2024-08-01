import Link from 'next/link';
import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem, ContextMenuCheckboxItem, ContextMenuSeparator } from '@radix-ui/react-context-menu';

const PropertiesPage = () => {
  return (
    <main className="flex min-h-80 flex-col items-center justify-between p-24 bg-yellow-200">
      <h1 className='bg-yellow-200'>PropertiesPage</h1>
      <Link className='text-blue-700' href={'/'}>Back to home page</Link>
      <Link className='text-blue-700' href={'/properties/123'}>Go to specific property</Link>
      <ContextMenu>
        <ContextMenuTrigger className='my-4 p-4 bg-gray-200 border-2 border-solid border-green-400'>Right-click me</ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Open</ContextMenuItem>
          <ContextMenuCheckboxItem>Star</ContextMenuCheckboxItem>
          <ContextMenuSeparator />
          <ContextMenuItem>Rename</ContextMenuItem>
          <ContextMenuItem>Delete</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </main>
  );
};

export default PropertiesPage;
