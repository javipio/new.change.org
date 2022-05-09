import type { Petition } from 'types';

export const getPetitions: () => Petition[] = () => {
  return [
    {
      title: 'Petición 1',
      slug: 'prueba_1',
      author: {
        name: 'Antonio',
        img: '/lucho.jpg',
      },
      body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend ipsum sem, a lacinia odio gravida fringilla. Proin vel ligula ornare, molestie felis eu, dapibus urna. Curabitur facilisis tincidunt metus nec faucibus. Suspendisse volutpat bibendum bibendum. Maecenas ac tortor eu orci mattis porttitor. Mauris massa ante, tempus vel velit tempus, efficitur pulvinar massa. Curabitur sollicitudin mi at tellus dignissim, at ornare urna aliquet.</p><p>Duis quis mi lacus. Pellentesque et ante sed diam pharetra tincidunt eget sed purus. Sed risus sem, mollis vitae nisl id, molestie gravida massa. Fusce nec mollis felis, in pharetra tellus. Aliquam accumsan tincidunt est, eu egestas metus feugiat eu. Aliquam vestibulum eros eu mauris mollis cursus. Curabitur mattis dui massa, id sodales nulla viverra ac. Praesent ultricies, felis sit amet interdum ultricies, elit turpis facilisis neque, a egestas turpis turpis id tellus. Quisque non libero vitae massa consectetur vehicula. Pellentesque eget hendrerit ipsum. Sed ultrices dictum nibh, hendrerit aliquam lacus suscipit eget. Phasellus aliquam rhoncus tincidunt. Curabitur pretium nulla sit amet ante condimentum, vitae porta diam placerat. Duis eleifend eros ac ex aliquam, auctor dapibus sapien dignissim. Suspendisse rhoncus nunc id sollicitudin blandit. Integer tincidunt nisi nibh, ac luctus elit tempus eu.</p>',
      img: '/dummy.jpg',
      goal: 1000,
      votes: Math.floor(Math.random() * 1001),
    },
    {
      title: 'Petición 2',
      slug: 'prueba_2',
      author: {
        name: 'Jose Carlos',
        img: '/lucho.jpg',
      },
      body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend ipsum sem, a lacinia odio gravida fringilla. Proin vel ligula ornare, molestie felis eu, dapibus urna. Curabitur facilisis tincidunt metus nec faucibus. Suspendisse volutpat bibendum bibendum. Maecenas ac tortor eu orci mattis porttitor. Mauris massa ante, tempus vel velit tempus, efficitur pulvinar massa. Curabitur sollicitudin mi at tellus dignissim, at ornare urna aliquet.</p><p>Duis quis mi lacus. Pellentesque et ante sed diam pharetra tincidunt eget sed purus. Sed risus sem, mollis vitae nisl id, molestie gravida massa. Fusce nec mollis felis, in pharetra tellus. Aliquam accumsan tincidunt est, eu egestas metus feugiat eu. Aliquam vestibulum eros eu mauris mollis cursus. Curabitur mattis dui massa, id sodales nulla viverra ac. Praesent ultricies, felis sit amet interdum ultricies, elit turpis facilisis neque, a egestas turpis turpis id tellus. Quisque non libero vitae massa consectetur vehicula. Pellentesque eget hendrerit ipsum. Sed ultrices dictum nibh, hendrerit aliquam lacus suscipit eget. Phasellus aliquam rhoncus tincidunt. Curabitur pretium nulla sit amet ante condimentum, vitae porta diam placerat. Duis eleifend eros ac ex aliquam, auctor dapibus sapien dignissim. Suspendisse rhoncus nunc id sollicitudin blandit. Integer tincidunt nisi nibh, ac luctus elit tempus eu.</p>',
      img: '/dummy.jpg',
      goal: 100000,
      votes: Math.floor(Math.random() * 100001),
    },
    {
      title: 'Petición 3',
      slug: 'prueba_3',
      author: {
        name: 'Jose Carlos',
        img: '/lucho.jpg',
      },
      body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend ipsum sem, a lacinia odio gravida fringilla. Proin vel ligula ornare, molestie felis eu, dapibus urna. Curabitur facilisis tincidunt metus nec faucibus. Suspendisse volutpat bibendum bibendum. Maecenas ac tortor eu orci mattis porttitor. Mauris massa ante, tempus vel velit tempus, efficitur pulvinar massa. Curabitur sollicitudin mi at tellus dignissim, at ornare urna aliquet.</p><p>Duis quis mi lacus. Pellentesque et ante sed diam pharetra tincidunt eget sed purus. Sed risus sem, mollis vitae nisl id, molestie gravida massa. Fusce nec mollis felis, in pharetra tellus. Aliquam accumsan tincidunt est, eu egestas metus feugiat eu. Aliquam vestibulum eros eu mauris mollis cursus. Curabitur mattis dui massa, id sodales nulla viverra ac. Praesent ultricies, felis sit amet interdum ultricies, elit turpis facilisis neque, a egestas turpis turpis id tellus. Quisque non libero vitae massa consectetur vehicula. Pellentesque eget hendrerit ipsum. Sed ultrices dictum nibh, hendrerit aliquam lacus suscipit eget. Phasellus aliquam rhoncus tincidunt. Curabitur pretium nulla sit amet ante condimentum, vitae porta diam placerat. Duis eleifend eros ac ex aliquam, auctor dapibus sapien dignissim. Suspendisse rhoncus nunc id sollicitudin blandit. Integer tincidunt nisi nibh, ac luctus elit tempus eu.</p>',
      img: '/dummy.jpg',
      goal: 100000,
      votes: Math.floor(Math.random() * 100001),
    },
    {
      title: 'Lorem ipsum',
      slug: 'prueba_4',
      author: {
        name: 'Jose Carlos',
        img: '/lucho.jpg',
      },
      body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend ipsum sem, a lacinia odio gravida fringilla. Proin vel ligula ornare, molestie felis eu, dapibus urna. Curabitur facilisis tincidunt metus nec faucibus. Suspendisse volutpat bibendum bibendum. Maecenas ac tortor eu orci mattis porttitor. Mauris massa ante, tempus vel velit tempus, efficitur pulvinar massa. Curabitur sollicitudin mi at tellus dignissim, at ornare urna aliquet.</p><p>Duis quis mi lacus. Pellentesque et ante sed diam pharetra tincidunt eget sed purus. Sed risus sem, mollis vitae nisl id, molestie gravida massa. Fusce nec mollis felis, in pharetra tellus. Aliquam accumsan tincidunt est, eu egestas metus feugiat eu. Aliquam vestibulum eros eu mauris mollis cursus. Curabitur mattis dui massa, id sodales nulla viverra ac. Praesent ultricies, felis sit amet interdum ultricies, elit turpis facilisis neque, a egestas turpis turpis id tellus. Quisque non libero vitae massa consectetur vehicula. Pellentesque eget hendrerit ipsum. Sed ultrices dictum nibh, hendrerit aliquam lacus suscipit eget. Phasellus aliquam rhoncus tincidunt. Curabitur pretium nulla sit amet ante condimentum, vitae porta diam placerat. Duis eleifend eros ac ex aliquam, auctor dapibus sapien dignissim. Suspendisse rhoncus nunc id sollicitudin blandit. Integer tincidunt nisi nibh, ac luctus elit tempus eu.</p>',
      img: '/dummy.jpg',
      goal: 100000,
      votes: Math.floor(Math.random() * 100001),
    },
    {
      title: 'Lorem ipsum',
      slug: 'prueba_5',
      author: {
        name: 'Jose Carlos',
        img: '/lucho.jpg',
      },
      body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend ipsum sem, a lacinia odio gravida fringilla. Proin vel ligula ornare, molestie felis eu, dapibus urna. Curabitur facilisis tincidunt metus nec faucibus. Suspendisse volutpat bibendum bibendum. Maecenas ac tortor eu orci mattis porttitor. Mauris massa ante, tempus vel velit tempus, efficitur pulvinar massa. Curabitur sollicitudin mi at tellus dignissim, at ornare urna aliquet.</p><p>Duis quis mi lacus. Pellentesque et ante sed diam pharetra tincidunt eget sed purus. Sed risus sem, mollis vitae nisl id, molestie gravida massa. Fusce nec mollis felis, in pharetra tellus. Aliquam accumsan tincidunt est, eu egestas metus feugiat eu. Aliquam vestibulum eros eu mauris mollis cursus. Curabitur mattis dui massa, id sodales nulla viverra ac. Praesent ultricies, felis sit amet interdum ultricies, elit turpis facilisis neque, a egestas turpis turpis id tellus. Quisque non libero vitae massa consectetur vehicula. Pellentesque eget hendrerit ipsum. Sed ultrices dictum nibh, hendrerit aliquam lacus suscipit eget. Phasellus aliquam rhoncus tincidunt. Curabitur pretium nulla sit amet ante condimentum, vitae porta diam placerat. Duis eleifend eros ac ex aliquam, auctor dapibus sapien dignissim. Suspendisse rhoncus nunc id sollicitudin blandit. Integer tincidunt nisi nibh, ac luctus elit tempus eu.</p>',
      img: '/dummy.jpg',
      goal: 100000,
      votes: Math.floor(Math.random() * 100001),
    },
    {
      title: 'Lorem ipsum',
      slug: 'prueba_6',
      author: {
        name: 'Jose Carlos',
        img: '/lucho.jpg',
      },
      body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend ipsum sem, a lacinia odio gravida fringilla. Proin vel ligula ornare, molestie felis eu, dapibus urna. Curabitur facilisis tincidunt metus nec faucibus. Suspendisse volutpat bibendum bibendum. Maecenas ac tortor eu orci mattis porttitor. Mauris massa ante, tempus vel velit tempus, efficitur pulvinar massa. Curabitur sollicitudin mi at tellus dignissim, at ornare urna aliquet.</p><p>Duis quis mi lacus. Pellentesque et ante sed diam pharetra tincidunt eget sed purus. Sed risus sem, mollis vitae nisl id, molestie gravida massa. Fusce nec mollis felis, in pharetra tellus. Aliquam accumsan tincidunt est, eu egestas metus feugiat eu. Aliquam vestibulum eros eu mauris mollis cursus. Curabitur mattis dui massa, id sodales nulla viverra ac. Praesent ultricies, felis sit amet interdum ultricies, elit turpis facilisis neque, a egestas turpis turpis id tellus. Quisque non libero vitae massa consectetur vehicula. Pellentesque eget hendrerit ipsum. Sed ultrices dictum nibh, hendrerit aliquam lacus suscipit eget. Phasellus aliquam rhoncus tincidunt. Curabitur pretium nulla sit amet ante condimentum, vitae porta diam placerat. Duis eleifend eros ac ex aliquam, auctor dapibus sapien dignissim. Suspendisse rhoncus nunc id sollicitudin blandit. Integer tincidunt nisi nibh, ac luctus elit tempus eu.</p>',
      img: '/dummy.jpg',
      goal: 100000,
      votes: Math.floor(Math.random() * 100001),
    },
  ];
};
