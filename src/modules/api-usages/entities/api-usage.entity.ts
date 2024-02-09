import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Customer } from '../../customers/entities/customer.entity';

@Entity()
export class ApiUsage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  numberRequests: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;

  @Column()
  updated: Date;

  @ManyToOne(() => Customer, (customer) => customer.apiUsages)
  customer: Customer;
}
