import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';


  export const priorities = {
    High: 'high',
    Medium: 'medium',
    Low: 'low',
  }

  export const status = {
    Started: 'started',
    Pending: 'pending',
    Ended: 'ended',
  }

  @Entity()
  export class Tiket {
    tiket: {}
    [x: string]: {};
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        nullable: true,
        default: '',
    })
    title: string;

    @Column({
        nullable: true,
        default:'',
    })
    description: string;

    @Column({
        nullable: true,
        default: '',
    })
    priority: string;

    @Column({
        nullable: true,
        default: '',
    })
    date_to_end: string;

    @Column({
        nullable: true,
        default: 'started',
    })
    status: string;

  }