import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, User, Calendar, Filter, Search, ExternalLink, Edit2, Save, X } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';

interface ContactLead {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone_student: string;
    phone_parent?: string;
    city?: string;
    student_level: string;
    student_type: string;
    service_type: string;
    status: string;
    priority: string;
    notes?: string;
    created_at: string;
    updated_at: string;
    last_contacted_at?: string;
    scheduled_callback_at?: string;
}

export default function AdminLeadsPage() {
    const { toast } = useToast();
    const [leads, setLeads] = useState<ContactLead[]>([]);
    const [filteredLeads, setFilteredLeads] = useState<ContactLead[]>([]);
    const [loading, setLoading] = useState(true);
    const [statusFilter, setStatusFilter] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [editingLead, setEditingLead] = useState<string | null>(null);
    const [editedNotes, setEditedNotes] = useState('');
    const [editedStatus, setEditedStatus] = useState('');
    const [editedPriority, setEditedPriority] = useState('');

    useEffect(() => {
        fetchLeads();
    }, []);

    useEffect(() => {
        filterLeads();
    }, [leads, statusFilter, searchQuery]);

    const fetchLeads = async () => {
        try {
            const { data, error } = await supabase
                .from('contact_leads')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;

            setLeads(data || []);
        } catch (error: any) {
            console.error('Error fetching leads:', error);
            toast({
                title: "Erreur",
                description: "Impossible de charger les leads",
                variant: "destructive",
            });
        } finally {
            setLoading(false);
        }
    };

    const filterLeads = () => {
        let filtered = [...leads];

        // Status filter
        if (statusFilter !== 'all') {
            filtered = filtered.filter(lead => lead.status === statusFilter);
        }

        // Search filter
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(lead =>
                lead.first_name.toLowerCase().includes(query) ||
                lead.last_name.toLowerCase().includes(query) ||
                lead.email.toLowerCase().includes(query) ||
                lead.phone_student.includes(query)
            );
        }

        setFilteredLeads(filtered);
    };

    const startEditing = (lead: ContactLead) => {
        setEditingLead(lead.id);
        setEditedNotes(lead.notes || '');
        setEditedStatus(lead.status);
        setEditedPriority(lead.priority);
    };

    const cancelEditing = () => {
        setEditingLead(null);
        setEditedNotes('');
        setEditedStatus('');
        setEditedPriority('');
    };

    const saveEdit = async (leadId: string) => {
        try {
            const { error } = await supabase
                .from('contact_leads')
                .update({
                    notes: editedNotes,
                    status: editedStatus,
                    priority: editedPriority,
                    last_contacted_at: editedStatus === 'contacted' ? new Date().toISOString() : undefined,
                })
                .eq('id', leadId);

            if (error) throw error;

            toast({
                title: "✅ Mis à jour",
                description: "Le lead a été mis à jour avec succès",
            });

            fetchLeads();
            cancelEditing();
        } catch (error: any) {
            console.error('Error updating lead:', error);
            toast({
                title: "Erreur",
                description: "Impossible de mettre à jour le lead",
                variant: "destructive",
            });
        }
    };

    const getStatusBadge = (status: string) => {
        const badges: Record<string, { bg: string; text: string; label: string }> = {
            new: { bg: 'bg-blue-100', text: 'text-blue-800', label: '🆕 Nouveau' },
            contacted: { bg: 'bg-yellow-100', text: 'text-yellow-800', label: '📞 Contacté' },
            converted: { bg: 'bg-green-100', text: 'text-green-800', label: '✅ Converti' },
            lost: { bg: 'bg-gray-100', text: 'text-gray-800', label: '❌ Perdu' },
        };
        const badge = badges[status] || badges.new;
        return (
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${badge.bg} ${badge.text}`}>
                {badge.label}
            </span>
        );
    };

    const getPriorityBadge = (priority: string) => {
        const badges: Record<string, { bg: string; text: string; icon: string }> = {
            low: { bg: 'bg-gray-100', text: 'text-gray-600', icon: '⬇️' },
            normal: { bg: 'bg-blue-100', text: 'text-blue-600', icon: '➡️' },
            high: { bg: 'bg-orange-100', text: 'text-orange-600', icon: '⬆️' },
            urgent: { bg: 'bg-red-100', text: 'text-red-600', icon: '🔥' },
        };
        const badge = badges[priority] || badges.normal;
        return (
            <span className={`px-2 py-1 rounded text-xs font-semibold ${badge.bg} ${badge.text}`}>
                {badge.icon} {priority}
            </span>
        );
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleString('fr-FR', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    const stats = {
        total: leads.length,
        new: leads.filter(l => l.status === 'new').length,
        contacted: leads.filter(l => l.status === 'contacted').length,
        converted: leads.filter(l => l.status === 'converted').length,
    };

    if (loading) {
        return (
            <>
                <Navigation />
                <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
                        <p className="text-gray-600">Chargement des leads...</p>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <Navigation />
            <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">📊 Gestion des Leads</h1>
                        <p className="text-gray-600">Gérez et suivez tous vos contacts</p>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                        <Card>
                            <CardContent className="p-6">
                                <div className="text-2xl font-bold text-gray-900">{stats.total}</div>
                                <div className="text-sm text-gray-600">Total Leads</div>
                            </CardContent>
                        </Card>
                        <Card className="border-blue-200 bg-blue-50">
                            <CardContent className="p-6">
                                <div className="text-2xl font-bold text-blue-900">{stats.new}</div>
                                <div className="text-sm text-blue-600">Nouveaux</div>
                            </CardContent>
                        </Card>
                        <Card className="border-yellow-200 bg-yellow-50">
                            <CardContent className="p-6">
                                <div className="text-2xl font-bold text-yellow-900">{stats.contacted}</div>
                                <div className="text-sm text-yellow-600">Contactés</div>
                            </CardContent>
                        </Card>
                        <Card className="border-green-200 bg-green-50">
                            <CardContent className="p-6">
                                <div className="text-2xl font-bold text-green-900">{stats.converted}</div>
                                <div className="text-sm text-green-600">Convertis</div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Filters */}
                    <Card className="mb-6">
                        <CardContent className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-center gap-2">
                                    <Search className="w-5 h-5 text-gray-400" />
                                    <Input
                                        placeholder="Rechercher par nom, email, téléphone..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="flex-1"
                                    />
                                </div>
                                <div className="flex items-center gap-2">
                                    <Filter className="w-5 h-5 text-gray-400" />
                                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Filtrer par statut" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="all">Tous les statuts</SelectItem>
                                            <SelectItem value="new">Nouveaux</SelectItem>
                                            <SelectItem value="contacted">Contactés</SelectItem>
                                            <SelectItem value="converted">Convertis</SelectItem>
                                            <SelectItem value="lost">Perdus</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Leads List */}
                    <div className="space-y-4">
                        {filteredLeads.length === 0 ? (
                            <Card>
                                <CardContent className="p-12 text-center">
                                    <p className="text-gray-500">Aucun lead trouvé</p>
                                </CardContent>
                            </Card>
                        ) : (
                            filteredLeads.map((lead) => (
                                <Card key={lead.id} className="hover:shadow-lg transition-shadow">
                                    <CardHeader className="pb-3">
                                        <div className="flex items-start justify-between">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <CardTitle className="text-xl">
                                                        {lead.first_name} {lead.last_name}
                                                    </CardTitle>
                                                    {getStatusBadge(lead.status)}
                                                    {getPriorityBadge(lead.priority)}
                                                </div>
                                                <div className="text-sm text-gray-500">
                                                    Reçu le {formatDate(lead.created_at)}
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                {editingLead === lead.id ? (
                                                    <>
                                                        <Button
                                                            size="sm"
                                                            onClick={() => saveEdit(lead.id)}
                                                            className="bg-green-500 hover:bg-green-600"
                                                        >
                                                            <Save className="w-4 h-4" />
                                                        </Button>
                                                        <Button
                                                            size="sm"
                                                            variant="outline"
                                                            onClick={cancelEditing}
                                                        >
                                                            <X className="w-4 h-4" />
                                                        </Button>
                                                    </>
                                                ) : (
                                                    <Button
                                                        size="sm"
                                                        variant="outline"
                                                        onClick={() => startEditing(lead)}
                                                    >
                                                        <Edit2 className="w-4 h-4" />
                                                    </Button>
                                                )}
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {/* Contact Info */}
                                            <div className="space-y-3">
                                                <h4 className="font-semibold text-sm text-gray-700 mb-3">📞 Contact</h4>
                                                <div className="flex items-center gap-2 text-sm">
                                                    <Phone className="w-4 h-4 text-orange-500" />
                                                    <a href={`tel:${lead.phone_student}`} className="text-orange-600 hover:underline font-medium">
                                                        {lead.phone_student}
                                                    </a>
                                                    <span className="text-gray-500">(élève)</span>
                                                </div>
                                                {lead.phone_parent && (
                                                    <div className="flex items-center gap-2 text-sm">
                                                        <Phone className="w-4 h-4 text-orange-500" />
                                                        <a href={`tel:${lead.phone_parent}`} className="text-orange-600 hover:underline font-medium">
                                                            {lead.phone_parent}
                                                        </a>
                                                        <span className="text-gray-500">(parent)</span>
                                                    </div>
                                                )}
                                                <div className="flex items-center gap-2 text-sm">
                                                    <Mail className="w-4 h-4 text-orange-500" />
                                                    <a href={`mailto:${lead.email}`} className="text-orange-600 hover:underline">
                                                        {lead.email}
                                                    </a>
                                                </div>
                                                {lead.city && (
                                                    <div className="flex items-center gap-2 text-sm">
                                                        <MapPin className="w-4 h-4 text-orange-500" />
                                                        <span>{lead.city}</span>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Details */}
                                            <div className="space-y-3">
                                                <h4 className="font-semibold text-sm text-gray-700 mb-3">ℹ️ Détails</h4>
                                                <div className="text-sm space-y-2">
                                                    <p><strong>Niveau:</strong> {lead.student_level === 'prepa' ? 'Prépa' : lead.student_level === 'lycee' ? 'Lycée' : 'Collège'}</p>
                                                    <p><strong>Type:</strong> {lead.student_type === 'eleve' ? 'Élève' : 'Parent'}</p>
                                                    <p><strong>Service:</strong> {lead.service_type === 'stages_intensifs' ? 'Stages intensifs' : 'Cours particuliers'}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Edit Section */}
                                        {editingLead === lead.id ? (
                                            <div className="mt-6 pt-6 border-t space-y-4">
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="text-sm font-medium mb-2 block">Statut</label>
                                                        <Select value={editedStatus} onValueChange={setEditedStatus}>
                                                            <SelectTrigger>
                                                                <SelectValue />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                <SelectItem value="new">Nouveau</SelectItem>
                                                                <SelectItem value="contacted">Contacté</SelectItem>
                                                                <SelectItem value="converted">Converti</SelectItem>
                                                                <SelectItem value="lost">Perdu</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                    </div>
                                                    <div>
                                                        <label className="text-sm font-medium mb-2 block">Priorité</label>
                                                        <Select value={editedPriority} onValueChange={setEditedPriority}>
                                                            <SelectTrigger>
                                                                <SelectValue />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                <SelectItem value="low">Basse</SelectItem>
                                                                <SelectItem value="normal">Normale</SelectItem>
                                                                <SelectItem value="high">Haute</SelectItem>
                                                                <SelectItem value="urgent">Urgente</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="text-sm font-medium mb-2 block">Notes</label>
                                                    <Textarea
                                                        placeholder="Ajouter des notes..."
                                                        value={editedNotes}
                                                        onChange={(e) => setEditedNotes(e.target.value)}
                                                        rows={3}
                                                    />
                                                </div>
                                            </div>
                                        ) : lead.notes ? (
                                            <div className="mt-6 pt-6 border-t">
                                                <h4 className="font-semibold text-sm text-gray-700 mb-2">📝 Notes</h4>
                                                <p className="text-sm text-gray-600 whitespace-pre-wrap">{lead.notes}</p>
                                            </div>
                                        ) : null}
                                    </CardContent>
                                </Card>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
