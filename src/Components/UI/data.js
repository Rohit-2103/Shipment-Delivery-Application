import React from 'react';
const Data = [
  {
    id: 1,
    name: 'John Doe',
    address: '123 Maple Street, Springfield, IL, 62704',
    imageUrl: 'https://media.istockphoto.com/id/1460445953/photo/fashionable-woman-doing-online-shopping.jpg?s=612x612&w=0&k=20&c=YaNe6oGkCWbbPKLgc_gBgvAT9FPbTPulbXmIVyl2Oic='
  },
  {
    id: 2,
    name: 'Jane Smith',
    address: '456 Oak Avenue, Springfield, IL, 62704',
    imageUrl: 'https://media.istockphoto.com/id/2161304332/photo/package-delivery-and-woman-with-courier-bag-and-front-door-with-smile-and-happy-from-order.jpg?s=612x612&w=0&k=20&c=3iXP0lDAQZgVBpb5g0OuJrZ6x2eQ6MGe9tLgMfybc4U='
  },
  {
    id: 3,
    name: 'Michael Johnson',
    address: '789 Pine Road, Springfield, IL, 62704',
    imageUrl: 'https://media.istockphoto.com/id/2161304332/photo/package-delivery-and-woman-with-courier-bag-and-front-door-with-smile-and-happy-from-order.jpg?s=612x612&w=0&k=20&c=3iXP0lDAQZgVBpb5g0OuJrZ6x2eQ6MGe9tLgMfybc4U='
  },
  {
    id: 4,
    name: 'Emily Davis',
    address: '101 Birch Lane, Springfield, IL, 62704',
    imageUrl: 'https://media.istockphoto.com/id/1482231192/photo/shocked-adult-student-holding-credit-card-and-reading-text-message-on-his-mobile-phone-with.jpg?s=612x612&w=0&k=20&c=JoS-GkZDSGuuX9CEmtaqJPPRiarrpe16rLV_eF4Ob1Q='
  },
  {
    id: 5,
    name: 'Chris Brown',
    address: '202 Cedar Boulevard, Springfield, IL, 62704',
    imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE0fHxkZWxpdmVyeXxlbnwwfHx8fDE2ODkzNzczMjc&ixlib=rb-1.2.1&q=80&w=400'
  },
  {
    id: 6,
    name: 'Amanda Wilson',
    address: '303 Elm Street, Springfield, IL, 62704',
    imageUrl: 'https://media.istockphoto.com/id/1460445953/photo/fashionable-woman-doing-online-shopping.jpg?s=612x612&w=0&k=20&c=YaNe6oGkCWbbPKLgc_gBgvAT9FPbTPulbXmIVyl2Oic='
  },
  {
    id: 7,
    name: 'Daniel Miller',
    address: '404 Pine Avenue, Springfield, IL, 62704',
    imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE0fHxkZWxpdmVyeXxlbnwwfHx8fDE2ODkzNzczMjc&ixlib=rb-1.2.1&q=80&w=400'
  },
  {
    id: 8,
    name: 'Sarah Lee',
    address: '505 Oak Lane, Springfield, IL, 62704',
    imageUrl: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDI3fHxkZWxpdmVyeXxlbnwwfHx8fDE2ODkzNzczMjc&ixlib=rb-1.2.1&q=80&w=400'
  },
  {
    id: 9,
    name: 'David Harris',
    address: '606 Maple Avenue, Springfield, IL, 62704',
    imageUrl: 'https://media.istockphoto.com/id/1460445953/photo/fashionable-woman-doing-online-shopping.jpg?s=612x612&w=0&k=20&c=YaNe6oGkCWbbPKLgc_gBgvAT9FPbTPulbXmIVyl2Oic='
  },
  {
    id: 10,
    name: 'Jessica Martinez',
    address: '707 Birch Road, Springfield, IL, 62704',
    imageUrl: 'https://media.istockphoto.com/id/1460445953/photo/fashionable-woman-doing-online-shopping.jpg?s=612x612&w=0&k=20&c=YaNe6oGkCWbbPKLgc_gBgvAT9FPbTPulbXmIVyl2Oic='
  },
  {
    id: 11,
    name: 'Joshua White',
    address: '808 Cedar Street, Springfield, IL, 62704',
    imageUrl: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDI3fHxkZWxpdmVyeXxlbnwwfHx8fDE2ODkzNzczMjc&ixlib=rb-1.2.1&q=80&w=400'
  },
  {
    id: 12,
    name: 'Sophia Taylor',
    address: '909 Elm Boulevard, Springfield, IL, 62704',
    imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE0fHxkZWxpdmVyeXxlbnwwfHx8fDE2ODkzNzczMjc&ixlib=rb-1.2.1&q=80&w=400'
  },
  {
    id: 13,
    name: 'John Doe',
    address: '123 Maple Street, Springfield, IL, 62704',
    imageUrl: 'https://media.istockphoto.com/id/1460445953/photo/fashionable-woman-doing-online-shopping.jpg?s=612x612&w=0&k=20&c=YaNe6oGkCWbbPKLgc_gBgvAT9FPbTPulbXmIVyl2Oic='
  },
  {
    id: 14,
    name: 'Jane Smith',
    address: '456 Oak Avenue, Springfield, IL, 62704',
    imageUrl: 'https://media.istockphoto.com/id/2161304332/photo/package-delivery-and-woman-with-courier-bag-and-front-door-with-smile-and-happy-from-order.jpg?s=612x612&w=0&k=20&c=3iXP0lDAQZgVBpb5g0OuJrZ6x2eQ6MGe9tLgMfybc4U='
  },
  {
    id: 15,
    name: 'Michael Johnson',
    address: '789 Pine Road, Springfield, IL, 62704',
    imageUrl: 'https://media.istockphoto.com/id/2161304332/photo/package-delivery-and-woman-with-courier-bag-and-front-door-with-smile-and-happy-from-order.jpg?s=612x612&w=0&k=20&c=3iXP0lDAQZgVBpb5g0OuJrZ6x2eQ6MGe9tLgMfybc4U='
  },
  {
    id: 16,
    name: 'Emily Davis',
    address: '101 Birch Lane, Springfield, IL, 62704',
    imageUrl: 'https://media.istockphoto.com/id/1482231192/photo/shocked-adult-student-holding-credit-card-and-reading-text-message-on-his-mobile-phone-with.jpg?s=612x612&w=0&k=20&c=JoS-GkZDSGuuX9CEmtaqJPPRiarrpe16rLV_eF4Ob1Q='
  },
  {
    id: 17,
    name: 'Chris Brown',
    address: '202 Cedar Boulevard, Springfield, IL, 62704',
    imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE0fHxkZWxpdmVyeXxlbnwwfHx8fDE2ODkzNzczMjc&ixlib=rb-1.2.1&q=80&w=400'
  },
  {
    id: 18,
    name: 'Amanda Wilson',
    address: '303 Elm Street, Springfield, IL, 62704',
    imageUrl: 'https://media.istockphoto.com/id/1460445953/photo/fashionable-woman-doing-online-shopping.jpg?s=612x612&w=0&k=20&c=YaNe6oGkCWbbPKLgc_gBgvAT9FPbTPulbXmIVyl2Oic='
  },
  {
    id: 19,
    name: 'Daniel Miller',
    address: '404 Pine Avenue, Springfield, IL, 62704',
    imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE0fHxkZWxpdmVyeXxlbnwwfHx8fDE2ODkzNzczMjc&ixlib=rb-1.2.1&q=80&w=400'
  },
  {
    id: 20,
    name: 'Sarah Lee',
    address: '505 Oak Lane, Springfield, IL, 62704',
    imageUrl: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDI3fHxkZWxpdmVyeXxlbnwwfHx8fDE2ODkzNzczMjc&ixlib=rb-1.2.1&q=80&w=400'
  },
  {
    id: 21,
    name: 'David Harris',
    address: '606 Maple Avenue, Springfield, IL, 62704',
    imageUrl: 'https://media.istockphoto.com/id/1460445953/photo/fashionable-woman-doing-online-shopping.jpg?s=612x612&w=0&k=20&c=YaNe6oGkCWbbPKLgc_gBgvAT9FPbTPulbXmIVyl2Oic='
  },
  {
    id: 22,
    name: 'Jessica Martinez',
    address: '707 Birch Road, Springfield, IL, 62704',
    imageUrl: 'https://media.istockphoto.com/id/1460445953/photo/fashionable-woman-doing-online-shopping.jpg?s=612x612&w=0&k=20&c=YaNe6oGkCWbbPKLgc_gBgvAT9FPbTPulbXmIVyl2Oic='
  },
  {
    id: 23,
    name: 'Joshua White',
    address: '808 Cedar Street, Springfield, IL, 62704',
    imageUrl: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDI3fHxkZWxpdmVyeXxlbnwwfHx8fDE2ODkzNzczMjc&ixlib=rb-1.2.1&q=80&w=400'
  },
  {
    id: 24,
    name: 'Sophia Taylor',
    address: '909 Elm Boulevard, Springfield, IL, 62704',
    imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE0fHxkZWxpdmVyeXxlbnwwfHx8fDE2ODkzNzczMjc&ixlib=rb-1.2.1&q=80&w=400'
  }
];



export default Data;