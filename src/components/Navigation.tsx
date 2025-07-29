
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { useRoleAccess } from '@/hooks/useRoleAccess';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { GlobalSearch } from '@/components/search/GlobalSearch';
import { MobileSearch } from '@/components/search/MobileSearch';
import { SearchTrigger } from '@/components/search/SearchTrigger';
import { LogOut, Menu, X, ChevronDown, FileText, Users, User, BookOpen, Package, Radio, Instagram, Linkedin, GraduationCap, Handshake, BarChart3, Code, Languages, Globe, UserCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import Navbar from './navigation/Navbar';

const Navigation = () => {
  return <Navbar />;
};

export default Navigation;
