import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity()
export class IpDatum {
  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Column()
  ip: string;

  @Column()
  info: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;

  @Column()
  updated: Date;
}
