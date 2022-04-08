import {
  Column,
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

import {
  IsDate,
  IsInt,
  IsOptional,
  IsNotEmpty,
  IsString,
  Length,
  Max,
  Min,
  Matches,
} from 'class-validator';

import { CrudValidationGroups } from '@nestjsx/crud';
import { Exclude } from 'class-transformer';

const { CREATE, UPDATE } = CrudValidationGroups;

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @IsString({ always: true })
  @Length(3, 20, { always: true })
  @Matches(/^\w(\w|['])*$/g, {
    always: true,
    message: 'First name could contain only letters and apostrophe',
  })
  firstName: string;

  @Column({ nullable: true })
  @IsOptional({ always: true })
  @IsString({ always: true })
  @Length(3, 20, { always: true })
  @Matches(/^\w(\w|['])*$/g, {
    always: true,
    message: 'First name could contain only letters and apostrophe',
  })
  lastName?: string;

  @Column()
  @IsInt({ always: true })
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @Min(18, { always: true })
  @Max(99, { always: true })
  age: number;

  @CreateDateColumn()
  @IsDate()
  @Exclude()
  createdAt: Date;

  @UpdateDateColumn()
  @IsDate()
  @Exclude()
  updatedAt: Date;

  @DeleteDateColumn({ nullable: true })
  @IsDate()
  @Exclude()
  deletedAt?: Date;
}
